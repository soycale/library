"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import useApiCall from "@/hooks/useApiCall";
import CategoryTabs from "@/components/categoryTabs/categoryTabs";
import SearchInput from "@/components/searchInput";
import FeaturedTabContent from "@/components/featuredTabContent";
import DefaultTabContent from "@/components/defaultTabContent";
import Modal from "@/components/modal";
import ModalContent from "@/components/modal/modalContent";
import RequestedStoryBoards from "@/components/buttons/requestedStoryBoards";
import { AssetType, Categories } from "@/app/types/enums";
import { Asset } from "@/app/types/assets";

// Define the categories for the tabs
const CATEGORY_TABS: Categories[] = Object.values(Categories) as Categories[];

const Library = () => {
  const searchParams = useSearchParams();
  const modalParam = searchParams.get("modal");

  const [activeTab, setActiveTab] = useState<Categories>(Categories.Featured);
  const [initData, setInitialData] = useState<Asset[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [filteredData, setFilteredData] = useState<Asset[]>([]);

  const { get } = useApiCall(); // Custom hook for API calls

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAsset(null);
  };

  const handleAssetClick = (asset: Asset) => {
    setOpenModal(true);
    setSelectedAsset(asset);
  };

  // Fetch initial data
  const fetchInitialData = useCallback(async () => {
    const data = await get("api/asset");
    setInitialData(data);
  }, [get]);

  // Effect to handle modal URL parameter
  useEffect(() => {
    const assetId = searchParams.get("id");
    if (modalParam && assetId) {
      setSelectedAsset({ id: assetId } as Asset);
      setOpenModal(true);
    }
  }, [modalParam, searchParams]);

  // Fetch data on component mount
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  // Filter data based on active tab
  const filteredDataByTab = useMemo(() => {
    switch (activeTab) {
      case Categories.Featured:
        return filteredData;
      case Categories.KPI:
        return filteredData.filter((asset) => asset.type === AssetType.KPI);
      case Categories.Layouts:
        return filteredData.filter((asset) => asset.type === AssetType.Layouts);
      case Categories.Storyboards:
        return filteredData.filter(
          (asset) => asset.type === AssetType.Storyboards
        );
      default:
        return filteredData;
    }
  }, [activeTab, filteredData]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-5">
      <div className="flex flex-row-reverse w-full">
        <RequestedStoryBoards />
      </div>
      <h1 className="text-6xl font-bold mb-7 text-center">Library</h1>
      <p className="text-xl mb-10">
        Browse for assets needed to report and present analysis
      </p>
      <SearchInput data={initData ?? []} setFilteredData={setFilteredData} />
      <CategoryTabs
        categories={CATEGORY_TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === Categories.Featured ? (
        <FeaturedTabContent
          data={filteredDataByTab ?? []}
          handleClick={handleAssetClick}
        />
      ) : (
        <DefaultTabContent
          data={filteredDataByTab ?? []}
          handleClick={handleAssetClick}
        />
      )}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        assetId={selectedAsset?.id}
      >
        <ModalContent asset={selectedAsset} />
      </Modal>
    </div>
  );
};

export default Library;
