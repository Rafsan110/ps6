import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { highlightsSlides } from './index.js';
import replayImg from './replay.svg';
import playImg from './play.svg';
import pauseImg from './pause.svg';

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    });

    const [loadedData, setLoadedData] = useState([]);
    const { isEnd, startPlay, isLastVideo, videoId, isPlaying } = video;

    useGSAP(() => {
        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut' 
        });

        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none'
            },
            onComplete: () => {
                setVideo((pre) => ({
                    ...pre,
                    startPlay: true,
                    isPlaying: true
                }));
            }
        });
    }, [isEnd, videoId]);


    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            let anime = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anime.progress() * 100);
                    if (progress !== currentProgress) {
                        currentProgress = progress;

                        gsap.to(videoDivRef.current[videoId], {
                            width: window.innerWidth < 760 ? '10vw' 
                            : window.innerWidth < 1200 ? '10vw' : '4vw'
                        });
                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: 'white'
                        });
                    }
                },
                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px'
                        });
                        gsap.to(span[videoId], {
                            backgroundColor: '#afafaf'
                        });
                    }
                }
            });

            if (videoId == 0) {
                anime.restart();
            }

            const animeUpdate = () => {
                anime.progress(
                    videoRef.current[videoId].currentTime / highlightsSlides[videoId].videoDuration
                );
            };

            if (isPlaying) {
                gsap.ticker.add(animeUpdate);
            } else {
                gsap.ticker.remove(animeUpdate);
            }

            // Cleanup ticker on unmount or videoId change
            return () => {
                gsap.ticker.remove(animeUpdate);
            };
        }
    }, [videoId, startPlay]);

    useEffect(() => {
        if (loadedData.length > 3) {
          if (!isPlaying) {
            videoRef.current[videoId].pause();
          } else {
            startPlay && videoRef.current[videoId].play();
          }
        }
      }, [startPlay, videoId, isPlaying, loadedData]);

    const handleProcess = (type, i) => {
        switch(type) {
            case 'video-end':
                setVideo((pre) => ({...pre, isEnd: true, videoId: i + 1}));
                break;
            case 'video-last':
                setVideo((pre) => ({...pre, isLastVideo: true}));
                break;
            case 'video-reset':
                setVideo((pre) => ({...pre, isLastVideo: false, videoId: 0}));
                break;
            case "pause":
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;
            
            case "play":
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;
            default:
                return video;  
        }
    };
    const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);


    return (
        <section id='service'>
            <div className='carousel_contain'>
                {highlightsSlides.map((list, i) => (
                    <div key={list.id} id='slider' className='contain'>
                        <div className='video-carousel_container'>
                            <div className='video-container'>
                                <video 
                                    id='video'
                                    playsInline
                                    preload='auto'
                                    muted
                                    ref={(el) => (videoRef.current[i] = el)}
                                    onEnded={() => {
                                        i !== 3 ? handleProcess('video-end', i)
                                        : handleProcess('video-last');
                                    }}
                                    onPlay={() => setVideo((prevVideo) => ({
                                        ...prevVideo, isPlaying: true
                                    }))}
                                    onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                                >
                                    <source src={list.video} type='video/mp4' />
                                </video>
                            </div>
                            <div className='slider_text_div'>
                                {list.textLists.map((text, j) => (
                                    <p key={j} className='slider_text'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='progress_buttons'>
                <div className='progress_tracker'>
                    {videoRef.current.map((_, i) => (
                        <span 
                            key={i}
                            ref={(el) => (videoDivRef.current[i] = el)}
                            className='track_buttons'
                        >
                            <span className='idk' ref={(el) => (videoSpanRef.current[i] = el)} />
                        </span>
                    ))}
                </div>

                <button className='control-btn'>
                    <img 
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} 
                        alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
                        className='btn_image'
                        onClick={isLastVideo ? () => handleProcess('video-reset')
                                : !isPlaying ? () => handleProcess('play')
                                : () => handleProcess('pause')
                        }
                    />
                </button>
            </div>
        </section>
    );
};

export default VideoCarousel;
