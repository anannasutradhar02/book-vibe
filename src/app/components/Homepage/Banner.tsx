
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="
                    grid grid-cols-1 lg:grid-cols-2
                    items-center
                    gap-10 lg:gap-16
                    min-h-[450px]
                    px-6 py-10
                    md:px-12 md:py-14
                    rounded-3xl
                    bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300
                    shadow-lg
                    overflow-hidden
                ">

                    <div className="space-y-6 text-center lg:text-left">

                        <span className="
                            inline-block
                            px-4 py-2
                            rounded-full
                            bg-white/70
                            text-sm font-semibold
                            text-green-600
                            shadow-sm
                        ">
                            📚 Explore Your Next Read
                        </span>

                        <h2 className="
                            text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-tight
                            text-slate-800
                        ">
                            Books to freshen up
                            <br />
                            <span className="text-green-600">
                                your bookshelf
                            </span>
                        </h2>

                        <p className="
                            max-w-lg
                            mx-auto lg:mx-0
                            text-base md:text-lg
                            leading-relaxed
                            text-slate-600
                        ">
                            Discover amazing books, explore new stories,
                            and find your next favorite read for your
                            bookshelf.
                        </p>

                        <button className="
                            btn btn-success
                            px-7
                            rounded-full
                            text-white
                            shadow-md
                            hover:scale-105
                            transition-all
                            duration-300
                        ">
                            View the task →
                        </button>

                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="
                            relative
                            w-full
                            max-w-md
                            overflow-hidden
                            rounded-3xl
                            shadow-2xl
                            rotate-1
                            hover:rotate-0
                            transition-transform
                            duration-500
                        ">
                            <Image
                                src={bannerImg}
                                alt="Books banner"
                                width={600}
                                height={450}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;

