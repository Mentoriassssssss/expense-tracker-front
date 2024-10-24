import Graph from "./components/graph";
import TotalBalance from "./components/totalBalance";
import TotalExpense from "./components/totalExpense";
import TotalIncome from "./components/totalIncome";

export default function Home() {

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
    gap-2
    ">
      <p className="w-full text-[var(--primary-color)] text-3xl font-semibold">All transactions</p>
      <div className="h-full w-full flex gap-4">
        <div className="h-full grow-[11] flex flex-col gap-4">
          <div className="h-[50%] flex flex-col items-center w-full rounded-xl border-2 border-[var(--border)] px-4 py-2 bg-[var(--highlight-background)]">
            <h3 className="text-2xl text-[var(--primary-color2)] font-bold w-full">
              Graph
            </h3>
            <Graph />
          </div>
          <div className="h-[50%] w-full grid grid-cols-2 gap-4 text-2xl text-[var(--primary-color2)] font-bold">
            <TotalIncome />
            <TotalExpense />
            <div className="col-span-2 flex items-center justify-center">
              <TotalBalance/>
            </div>
          </div>
        </div>
        <div className="h-full grow-[9] px-4">
          <p className="text-[var(--primary-color2)] text-2xl font-bold mb-6">Recent history</p>
          <ul className="w-full gap-2 flex flex-col font-semibold">
            
          </ul>
        </div>
      </div>
    </div>
  );
}
