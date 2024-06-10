import Creaters from "@/components/MarketplaceComps/Creaters/Creaters"
import Trending from "@/components/MarketplaceComps/TrendingNFTs/Trending"
import Nav from "@/components/Nav/Nav"
import { Button } from "antd"
import History from "@/components/MarketplaceComps/History/History"
import Recent from "@/components/MarketplaceComps/RecentPosts"
import Footer from "@/components/Footer/Footer"

function Marketplace() {
  return (
    <div className="mt-[120px] w-full">
        <Nav page="NFT Marketplace"/>
        <div className="w-full flex items-center justify-between px-8 border flex-wrap ">
<div className="w-[520px] h-[468px] nft-discover  flex items-center justify-center flex-col  px-28 gap-4 rounded-3xl">
<h1 className="font-bold text-white text-4xl">Discover,<br /> Collect, and sell <br /> extraordinory NFTs</h1>
<p className=" text-md text-gray-300 w-full text-start">Enter in this creative world.<br/> Discover now the latest NFTs <br /> or start creating your own!</p>
<div className="w-full flex items-center justify-center gap-12  py-8">
    <Button className="px-4 py-1 text-custom_blue rounded-lg">Discover Now</Button>
    <Button className="bg-transparent px-4 py-1 text-white" type="text" >Watch Now</Button>
</div>
</div>
<Creaters/>
<Trending/>
<History/>
<Recent/>
<Footer/>
        </div>
        
    </div>
  )
}

export default Marketplace