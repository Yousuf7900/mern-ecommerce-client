
const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="w-full bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto text-center">

                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                    Subscribe to our newsletter
                </h2>

                <p className="mt-3 text-sm sm:text-base text-gray-500">
                    Get the latest updates, offers, and product releases directly in your inbox.
                </p>

                <form onClick={onSubmitHandler} className="mt-6 flex flex-col sm:flex-row items-center gap-3">

                    <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        required
                        className="w-full flex-1 px-4 py-3 text-sm border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition"
                    />

                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition duration-300"
                    >
                        Subscribe
                    </button>

                </form>

            </div>
        </div>
    );
};

export default NewsLetterBox;