import DevelopmentTable from "@/components/DataTables/DevelopmentTable/DevelopmentTable"
import Nav from "@/components/Nav/Nav"
import DataTable from "@/components/Tables/Tables"
import ComplexTable from "@/components/ComplexTable/ComplexTable"
import ColumnTable from "@/components/DataTables/ColumnTable/ColumnTable"
import Footer from "@/components/Footer/Footer"
function DataTables() {
  return (
    <div className="mt-[120px] w-full">
        <Nav page={"Data Tables"}/>
        <div className="w-full flex items-center justify-between px-8 border flex-wrap gap-8">
        <DevelopmentTable/>
        <DataTable/>
        <ColumnTable/>
        <ComplexTable/>
        <Footer/>
        
        </div>
    </div>
  )
}

export default DataTables