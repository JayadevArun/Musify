import React from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';

function AudioList() {
  return (
    <div className='audioList'>
        <h2 className='title'>
            The List <span>12 songs</span>
        </h2>

        <div className='songContainer'>
            <div className='songs'>
                <div className='count'>#01</div>
                <div className='song'>
                    <div className='imgBox'>
                        <img src='' alt='' />
                    </div>
                    <div className='section'>
                        <p className='songName'>
                            Take me on
                            <span className='spanArtist'>Artist Name</span>
                        </p>

                        <div className='hits'>
                            <p className='hit'>
                                <i>
                                    <FaHeadphones />
                                </i>
                                95,480,132
                            </p>

                            <p className='duration'>
                                <i>
                                    <FaRegClock />
                                </i>
                                3.04
                            </p>

                            <div className='favourite'>
                                <i>
                                    <FaHeart />
                                </i>
                                <i>
                                    <FaRegHeart />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export {AudioList};