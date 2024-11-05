import bannerImg from '/banner.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Explore from '../Explore/Explore';

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className="mx-5 rounded-[32px] bg-primPink grid gap-10 justify-center pt-32 pb-40 md:pb-64 px-5 relative bottom-16">
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center max-w-6xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className="text-white text-sm md:text-base text-center max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <AnchorLink href='#explore' className='mx-auto'><button className="font-bold text-lg md:text-xl text-primPink bg-white rounded-full px-5 py-3 border-2 border-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white transition-colors">Shop Now</button></AnchorLink>
            </div>
            <div className='mx-10'>
                <div className='max-w-[1100px] mx-auto rounded-3xl p-5 border-2 border-white bg-white bg-opacity-20 relative bottom-44 md:bottom-64'>
                    <img className='max-h-[550px] w-[1100px] mx-auto object-cover rounded-2xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;