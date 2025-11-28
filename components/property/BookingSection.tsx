

const BookingSection: React.FC <{price: number}> = ({ price }) => {
    return(
        <div className="p-6 bg-white text-black shadow-md rounded-lg">
            <h3 className="">${price}/night</h3>
            <div className="mt-4">
                <label htmlFor="">Check-in</label>
                <input type="date" className="border p-2 w-full mt-2" />
            </div>
            <div className="mt-4">
                <label htmlFor="">Check-Out</label>
                <input type="date" className="border p-2 w-full mt-2" />
            </div>

            {/* Total payment */}
            <div className="mt-4">
                <p className="">Total payment: <strong>${price * 7}</strong></p>
            </div>

            {/* Reserve button */}
            <button className="bg-green-500  mt-4 py-2 px-4 rounded-md">Reserve now</button>
        </div>
    );
};

export default BookingSection;