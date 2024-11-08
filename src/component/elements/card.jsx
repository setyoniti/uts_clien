import {Icon} from "../Icon/Index";

const Card = () => {
    return (
        <>
            <div className="text-lg text-gray-02 mb-2">Title</div>
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex flex-col">
                <p className="text-gray-700 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?
                </p>
                
                <div className="flex justify-between">
            <button className="text-primary px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Remove
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg transition duration-300 flex items-center justify-center ">
                <span className="align-middle">Details</span>
                <Icon.Panah />
            </button>
        </div>

            </div>
        </>
    );
};

export default Card;
