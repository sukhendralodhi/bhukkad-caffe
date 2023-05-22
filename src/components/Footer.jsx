
const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white py-10 flex flex-col relative top-16 border border-black justify-between md:flex md:flex-row">
                <div className="flex flex-1 justify-around">
                    {/*contact section start*/}
                    <section>
                        <span className="opacity-50 font-medium">COMPANY</span>
                        <ul className="mt-4 flex flex-col space-y-2">
                            <a className="hover:underline underline-offset-4" href="">
                                <li>About us</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Team</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Careers</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Swiggy Blog</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Bug Bounty</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Swiggy One</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Swiggy Corporate</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Swiggy Instamart</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Swiggy Genie</li>
                            </a>
                        </ul>
                    </section>
                    {/*company section end*/}
                    {/*contact and logo section start*/}
                    <div>
                        <section>
                            <span className="opacity-50 font-medium">CONTACT</span>
                            <ul className="mt-4 flex flex-col space-y-2">
                                <a className="hover:underline underline-offset-4" href="">
                                    <li>Help & Support</li>
                                </a>
                                <a className="hover:underline underline-offset-4" href="">
                                    <li>Partner with us</li>
                                </a>
                                <a className="hover:underline underline-offset-4" href="">
                                    <li>Ride with us</li>
                                </a>
                            </ul>
                        </section>

                        <section className="flex flex-col gap-4 mt-4 md:hidden">
                            <img
                                className="h-12 cursor-pointer"
                                alt=""
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                            />
                            <img
                                className="h-12 cursor-pointer"
                                alt=""
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                            />
                        </section>
                    </div>
                    {/*contact and logo section start*/}

                    {/*legal section start*/}
                    <section className="hidden sm:block md:block">
                        <span className="opacity-50 font-medium">LEGAL</span>
                        <ul className="mt-4 flex flex-col gap-2">
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Terms & Conditions</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Refund & Cancellation</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Privacy Policy</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Cookie Policy</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Offer Terms</li>
                            </a>
                            <a className="hover:underline underline-offset-4" href="">
                                <li>Phishing & Fraud</li>
                            </a>
                        </ul>
                    </section>
                    {/*legal section end*/}
                    {/*info section start*/}
                    <section className=" gap-4 hidden space-y-4 md:block">
                        <img
                            className="h-12 cursor-pointer"
                            alt=""
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                        />
                        <img
                            className="h-12 cursor-pointer"
                            alt=""
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                        />
                    </section>
                    {/*info section end*/}


                </div>
            </footer>
        </>
    );
}

export default Footer