import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function NavDots({ setActivePage, dot }: any) {
    return (
        <motion.div whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }} className="hidden md:flex flex-col gap-3 absolute top-1/2 -translate-x-1/2 right-0">
            {["Hero", "Portfolio", "AboutMe", "Skills&Experience", "ContactMe"].map(
                (el, i) => (
                    <Link
                        // href={`#${el}`}
                        to={el}
                        key={i}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hover:cursor-pointer w-3 h-3 relative"
                    >
                        <span
                            onClick={() => setActivePage(i)}
                            className={`${i === dot
                                ? "bg-secondary dark:bg-purple-300"
                                : "bg-gray-300"
                                } w-full h-full absolute aspect-square rounded-full`}
                        ></span>
                    </Link>
                )
            )}
        </motion.div>
    );
};

export default NavDots;