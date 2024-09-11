import { FaPlus,FaTrashCan } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

export default function Expenses () {
    const template3 = [
        {
            title: "title",
            icon: <FaPlus color="var(--primary-color)" size={40}/>,
            amount: 1000,
            date: '9/9/2024',
            ref: "Placeholder for notes"
        },
        {
            title: "title",
            icon: <FaPlus color="var(--primary-color)" size={40}/>,
            amount: 1000,
            date: '9/9/2024',
            ref: "Placeholder for notes"
        },
        {
            title: "title",
            icon: <FaPlus color="var(--primary-color)" size={40}/>,
            amount: 1000,
            date: '9/9/2024',
            ref: "Placeholder for notes"
        },
    ]

    return (
    <div className="h-full
        grow
        flex
        flex-col
        bg-[var(--background)]
        border-2
        border-[var(--border)]
        rounded-3xl
        p-4
        gap-4
    ">
        <div className="w-full h-auto text-[var(--primary-color)] text-3xl font-semibold">Expenses</div>
        <div className="w-full flex gap-4 items-center justify-center
        border-2 border-[var(--border)] rounded-xl
        p-4
        bg-[var(--highlight-background)]
        text-[var(--delete)]">
            <p className="text-[var(--primary-color)] text-2xl font-semibold">Total expenses: </p>
            {" "}
            <p className=" text-2xl font-semibold">VNĐ</p>
        </div>
        <div className="grow flex gap-4">
            <div  className="min-w-[30%] flex flex-col items-start justify-start gap-6">
            <form className="w-full gap-2 flex flex-col items-end">
                <input type="text"
                placeholder="Title"
                className="w-full
                border-2 border-[var(--border)]
                bg-[transparent]
                p-2
                focus:outline-none
                text-[var(--primary-color)]
                rounded-lg"/>
                <input type="text"
                placeholder="Amount"
                className="w-full
                border-2 border-[var(--border)]
                bg-[transparent]
                p-2
                text-[var(--primary-color)]
                focus:outline-none
                rounded-lg"/>
                <input type="text"
                placeholder="Date"
                className="w-full
                border-2 border-[var(--border)]
                text-[var(--primary-color)]
                bg-[transparent]
                p-2
                focus:outline-none
                rounded-lg"/>
                <select
                className="w-1/2
                border-2 border-[var(--border)]
                text-[var(--primary-color3)]
                bg-[transparent]
                p-2
                focus:outline-none
                rounded-lg">
                    <option className="text-[var(--primary-color)] bg-[transparent]" value="" disabled selected>Select option</option>
                </select>
                <textarea
                placeholder="Add a reference"
                className="w-full h-[150px]
                border-2 border-[var(--border)]
                text-[var(--primary-color)]
                bg-[transparent]
                p-2
                focus:outline-none
                rounded-lg"/>
            </form>
            <button type="submit" className="w-1/2 text-white bg-[var(--accent)] px-2 py-4 rounded-[100px] flex items-center justify-center gap-2">
                <FaPlus size={20}/>
                Add Expense
            </button>
            </div>
            
        <div className="
        w-full
        h-full
        gap-2
        flex
        flex-col
        ">
            {template3.map((item, index) => {
                return (
                    <div key={index} className="w-full flex gap-4 items-center justify-center bg-[var(--highlight-background)] border-2 border-[var(--border)] rounded-xl p-4">
                        <div className="border-2 border-[var(--reverse-text-color)] rounded-xl p-2">{item.icon}</div>
                        <div className="grow flex flex-col items-start justify-start">
                            <div className="flex gap-2 justify-center items-center">
                                <div className="w-2 h-2 bg-[var(--delete)] rounded-full"></div>
                                <p className="text-[var(--primary-color)] text-lg font-semibold">{item.title}</p>
                            </div>
                            <div className="flex gap-4 justify-center items-center text-[var(--primary-color2)] text-md">
                                <div>
                                    {item.amount} VNĐ
                                </div>
                                <div className="flex gap-1 items-center">
                                    <FaCalendar size={16}/>{item.date}
                                </div>
                                <div className="flex gap-1 items-center">
                                    <FaCalendar size={16}/>
                                    <p className="whitespace-nowrap text-ellipsis overflow-hidden max-w-[200px]">{item.ref}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 cursor-pointer">
                            <FaTrashCan size={20} color="var(--delete)"/>
                        </div>
                    </div>)
            })}
        </div>
        </div>
    </div>)
}