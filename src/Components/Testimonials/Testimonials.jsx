import { useState } from "react"

 const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "The support we've received from Float UI has been phenomenal. Their team is responsive, knowledgeable, and always ready to assist. They've made a significant impact on our business, and we couldn't be more satisfied."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "Float UI is both innovative and reliable. Their solutions are tailored to our needs, and their commitment to excellence shines through in everything they do. We're excited to continue our collaboration."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "Float UI has exceeded our expectations at every turn. Their expertise, dedication, and customer-centric approach have made a significant difference in our operations. We highly recommend their services."
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-indigo-600 font-semibold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Testimonials