import { useEffect, useState, useCallback } from "react";
import useApiCall from "@/hooks/useApiCall";
import KpiModalContent from "../kpiModal";
import LayoutModalContent from "../layoutModal";
import StoryboardModalContent from "../storyboardModal";
import Loader from "@/components/loader";
import { Asset } from "@/app/types/assets";
import { AssetType } from "@/app/types/enums";
import { Kpi } from "@/app/types/kpi";
import { Layout } from "@/app/types/layout";
import { Storyboard } from "@/app/types/storyBoard";
import { tree } from "next/dist/build/templates/app-page";

type Props = {
  asset: Asset | null;
};

const ModalContent: React.FC<Props> = ({ asset: assetProps }) => {
  const [asset, setAsset] = useState<Asset | null>(assetProps);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const { get, patch } = useApiCall();

  useEffect(() => {
    const getAssetData = async () => {
      if (!assetProps) return;
      setLoadingData(true);
      try {
        const data: Asset = await get(`api/asset/${assetProps.id}`);
        setAsset(data);

        // This is to simulate the late response from the API
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error("Failed to fetch asset data:", error);
      } finally {
        setLoadingData(false);
      }
    };

    getAssetData();
  }, [get, assetProps]);

  const switchFavoriteItem = useCallback(async () => {
    try {
      await patch(`api/asset/favorite/${asset?.id}`, {});
      setAsset((prevState) => {
        if (!prevState) return null;
        return { ...prevState, is_favorite: !prevState.is_favorite };
      });
    } catch (error) {
      console.error("Failed to switch favorite item:", error);
    }
  }, [asset?.id, patch]);

  if (loadingData) {
    return <Loader />;
  }

  if (!asset) return <div>No Data Available</div>;

  const assetData = asset.asset_data;
  if (!assetData) return <div>No Data Found</div>;

  // Handle which content to render based on the asset type
  const renderModalContent = () => {
    switch (asset.type) {
      case AssetType.KPI:
        return (
          <KpiModalContent
            data={assetData as Kpi}
            isFavorite={asset.is_favorite}
            switchFavorite={switchFavoriteItem}
          />
        );

      case AssetType.Layouts:
        return (
          <LayoutModalContent
            data={assetData as Layout}
            isFavorite={asset.is_favorite}
            switchFavorite={switchFavoriteItem}
          />
        );

      case AssetType.Storyboards:
        return (
          <StoryboardModalContent
            data={assetData as Storyboard}
            isFavorite={asset.is_favorite}
            switchFavorite={switchFavoriteItem}
          />
        );

      default:
        return <div>No Data Available</div>;
    }
  };

  return (
    <div className="flex flex-col items-center p-5 overflow-y-auto">
      {renderModalContent()}
    </div>
  );
};

export default ModalContent;
