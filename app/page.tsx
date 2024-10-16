import Graph from "./components/graph";
import GetAPI from "./getAPI/getAPI";

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
      <GetAPI type="getAllTransactions"/>
      <p className="w-full text-[var(--primary-color)] text-3xl font-semibold">All transactions</p>
      <div className="h-full w-full flex gap-4">
        <div className="h-full grow-[11] flex flex-col gap-4">
          <div className="h-[50%] w-full rounded-xl border-2 border-[var(--border)] p-4 bg-[var(--highlight-background)]">
            <h3 className="text-2xl text-[var(--primary-color2)] font-bold">
              Graph
            </h3>
            <Graph />
          </div>
          <div className="h-[50%] w-full grid grid-cols-2 gap-4 text-2xl text-[var(--primary-color2)] font-bold">
            <div className="border-2 border-[var(--border)] rounded-xl p-4 bg-[var(--highlight-background)]">
              Total incomes
              <div className="grow h-full flex items-center justify-center text-xl text-[var(--green)]">
                5000
              </div>
            </div>
            <div className="border-2 border-[var(--border)] rounded-xl p-4 bg-[var(--highlight-background)]">
              Total expenses
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="border-2 border-[var(--border)] rounded-xl p-4 w-[50%] h-full bg-[var(--highlight-background)]">Total balance</div>
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
