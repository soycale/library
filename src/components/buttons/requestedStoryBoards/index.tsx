import React, { useState, useCallback } from 'react';
import useApiCall from '@/hooks/useApiCall';
import RequestedInfoList from '@/components/requestedInfoList';
import { Storyboard } from '@/app/types/storyBoard';

const RequestedStoryBoards: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [requestedAccessData, setRequestedAccessData] = useState<Storyboard[]>([]);
  const { get } = useApiCall();

  // Fetch the requested StoryBoards
  const fetchRequestedAccessData = useCallback(async () => {
    const requestedData = await get("api/storyBoard/requestAccess");
    setRequestedAccessData(requestedData);
  }, [get]);

  const handleClick = async () => {
    if (!showList) {
      await fetchRequestedAccessData(); // Fetch data only when opening the list
    }
    setShowList(!showList);
  };

  return (
    <div className="requested-info-container">
      <button 
        className="flex items-center justify-center px-3 py-1 bg-gray-600 border-none rounded-md text-sm font-medium text-white cursor-pointer transition duration-300 ease-in-out shadow-lg hover:bg-gray-500"
        onClick={handleClick}
      >
        <span className="text-lg">📦</span>
        <span className="ml-2">Request</span>
      </button>
      {showList && <RequestedInfoList data={requestedAccessData} />}
    </div>
  );
};

export default RequestedStoryBoards;
