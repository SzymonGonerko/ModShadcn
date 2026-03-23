import { SimpleTable } from "./components/SimpleTable"
import DataTableDemo from "@/components/DataTableDemo"
import CustomDataTable from "./components/CustomDataTable"

export function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        Komponenty biblioteki Shadcn 
      </h1>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        (użyj "D" do zmiany motywu)
      </h1>
      <div className="flex min-h-svh justify-evenly p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <h2>
            Komponent <i>Table</i>
          </h2>
          <SimpleTable />
        </div>
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <h2>
            Komponent <i>Data Table</i>
          </h2>
          <DataTableDemo />
        </div>
        
      </div>
      <div className="flex min-h-svh justify-evenly p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <h2>
            Komponent <i>CustomDataTable</i>
          </h2>
          <CustomDataTable />
      </div>
      </div>
    </>
  )
}
