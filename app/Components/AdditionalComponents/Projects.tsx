'use client'
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
const AnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        }
    },
}
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const Projects: React.FC = () => {

    return (<>
        <motion.div
            viewport={{ once: true }}
            variants={AnimationVariants}
            initial="initial"
            whileInView="animate"
            className="mt-[15vh] text-blue-300 text-2xl text-center underline hover:underline-offset-4">Projects
        </motion.div>
        <motion.div
            viewport={{ once: true }}
            variants={AnimationVariants}
            initial="initial"
            whileInView="animate" className="flex flex-col my-10">
            <div className="flex gap-4 justify-center flex-col md:flex-row">
                <div className="w-full flex flex-col gap-3">
                    <span className="text-[--orange] text-sm">Featured Projects</span>
                    <a target="_blank" href="https://patreon-clony.vercel.app" className="text-[--green] underline hover:underline-offset-4 text-xl">Patreon Clone</a>
                    <div className="text-sm bg-[rgb(255,255,255,0.25)] px-4 py-2 rounded-xl md:w-[130%] relative z-[2]">
                        I developed a Patreon clone where users can create and manage their accounts effortlessly. I integrated Razorpay for seamless payment processing, ensuring secure transactions. This platform allows creators to offer exclusive content and manage their subscriptions effectively, giving users an intuitive experience for both content consumption and account management.
                    </div>
                </div>
                <Tilt className="my-5" options={defaultOptions}>
                    <div className="aspect-video border border-transparent shadow-xl shadow-deep-blue rounded-xl overflow-hidden text-center w-full">
                        <img src="/projects/patreon-clone.png" className="w-full object-cover object-center h-full relative-z-1" alt="" />
                    </div>
                </Tilt>
            </div>
            <div className="gap-8 mt-32 flex justify-center flex-col md:flex-row-reverse">
                <div className="w-full  md:items-end flex flex-col gap-3">
                    <span className="text-[--orange] text-sm">Featured Project</span>
                    <a target="_blank" href="https://enchantglow.vercel.app" className="text-[--green] underline hover:underline-offset-4 text-xl">Ecommerce Store</a>
                    <div className="text-sm bg-[rgb(255,255,255,0.25)] px-4 py-2 rounded-xl md:w-[130%] md:ml-[-25%] relative z-[2]">
                        In EcoGlow, users can shop, place orders, and manage their data securely. MongoDB stores user info and order history, Redux manages state, and NextAuth handles authentication, creating a seamless and secure shopping experience
                    </div>
                </div>
                <Tilt className="my-5" options={defaultOptions}>
                    <div className="aspect-video text-center w-full border border-transparent shadow-xl shadow-deep-blue rounded-xl overflow-hidden">
                        <img src="/projects/eco-glow.jpeg" className="object-cover object-center w-full h-full relative-z-1" alt="" />
                    </div>
                </Tilt>
            </div>
        </motion.div>
    </>
    )
}

export default Projects