'use client';
import React, { useEffect, useState } from 'react';

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface Channel {
  id: string;
  name: string;
  logo: string;

  country: string;
  broadcast_area:[];
  languages:[];
  is_nsfw: boolean;

}

const FAQChannel: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isChannelsVisible, setIsChannelsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null); // For modal

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://iptv-org.github.io/api/countries.json');
      const data = await res.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountryCode) {
      const fetchChannels = async () => {
        const res = await fetch('https://iptv-org.github.io/api/channels.json');
        const data = await res.json();
        const filtered = data.filter((channel: Channel) => channel.country === selectedCountryCode);
        setChannels(filtered);
      };

      fetchChannels();
    }
  }, [selectedCountryCode]);

  const handleCountryClick = (countryCode: string) => {
    if (selectedCountryCode === countryCode) {
      setIsChannelsVisible((prev) => !prev);
    } else {
      setSelectedCountryCode(countryCode);
      setIsChannelsVisible(true);
    }
    setActiveCountry(countryCode);
  };

  const handleChannelClick = (channel: Channel) => {
    setSelectedChannel(channel); // Open modal with channel details
  };

  const closeModal = () => {
    setSelectedChannel(null); // Close modal
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-full mt-8 px-4 sm:px-6 lg:px-8"> {/* Added padding for mobile */}
     <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 px-10 border text-white bg-gray-800 rounded-md"
        />
        <span className="absolute left-3 top-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </span>
      </div>

      <div className="space-y-2">
        {filteredCountries.map((country) => (
          <div key={country.code}>
            <button
              onClick={() => handleCountryClick(country.code)}
              className={`flex items-center w-full p-4 text-white rounded-md focus:outline-none 
                ${activeCountry === country.code ? 'spa text-white' : 'border'}`}
            >
               <span className="text-3xl text-white">{country.flag}</span>
               <span className="ml-2 text-white text-xl">{country.name}</span>
            </button>

            {isChannelsVisible && selectedCountryCode === country.code && (
              <div className="mt-2">
               <div className='flex bg-2 p-2'>
           <div className='w-1/2 flex justify-center items-center'>
                          <h3 className="text-lg">Channel Logo</h3>{/* Centered and spaced items */}

                            </div>
                            <div className='w-1/2 flex justify-center items-center'>
                          <h3 className="text-lg">Channel Name</h3>{/* Centered and spaced items */}

                            </div>
           </div>
                <div className="flex flex-col"> {/* Responsive grid layout */}
                  {channels.length > 0 ? (
                    channels
                      .filter(channel => channel.logo) // Filter out channels without logos
                      .map((channel) => (
                        <div key={channel.id} className="rounded-md border my-1 border-gray-600">
                          <div className='flex justify-around max-w-full items-center p-4 cursor-pointer' onClick={() => handleChannelClick(channel)}> 
                          <div className='w-1/2 flex justify-center items-center '   >
                              <img
                              src={channel.logo}
                              alt={channel.name}
                              className="w-16 h-16"
                            />
                            </div>
                          <div className='w-1/2 flex justify-center items-center'>  <h4 className="text-md ">{channel.name}</h4> {/* Added margin for spacing */}</div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p className="text-gray-400">No channels found for this country.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for showing detailed channel info */}
      {selectedChannel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 p-2  flex justify-center items-center z-50">
          <div className="bg-black rounded-lg p-6 max-h-full  w-[40%]">
            <div className="flex justify-end items-end">
           
              <button onClick={closeModal} className="text-white">X</button>
            </div>
            <div className='flex text-center justify-center items-center'>
            <h3 className="text-2xl font-bold">{selectedChannel.name}</h3>
            </div>
            <div className="flex flex-col-2 p-5 justify-center items-center">
            <div className='  w-[37%]  '>
           
        
          
           <img src={selectedChannel.logo} alt={selectedChannel.name} className="w-40 h-48 rounded-md " />
         
           
            </div>
         <div className='w-[60%] flex flex-col'>
            <div className='flex flex-col-2 items-end justify-between'>
              <div className='flex  m-2'>
              <ul className="mt-4  text-left">
                <li><strong>ID</strong> </li>
                <li><strong>Name</strong> </li>
                <li><strong>Country</strong></li>
                <li><strong>Broadcast Area</strong> </li>
                <li><strong>Language</strong></li>
                <li><strong>IS_NSFW</strong> </li>
              </ul>
              </div>
              <div className='flex m-2'>
              <ul className="mt-4 text-left">
                <li><span className='mr-1'>:</span> {selectedChannel.id}</li>
                <li><span className='mr-1'>:</span> {selectedChannel.name}</li>
                <li><span className='mr-1'>:</span> {selectedChannel.country}</li>
                
                <li><span className='mr-1'>:</span> {selectedChannel.broadcast_area}</li>
                <li><span className='mr-1'>:</span>{selectedChannel.languages}</li>
                <li><span className='mr-1'>:</span>{selectedChannel.is_nsfw ? 'Yes' : 'No'}</li>
              </ul>
              </div>
              
              </div>
              <button onClick={closeModal} className="button mt-5">
              Watch Now
            </button>
         </div>
            
              
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQChannel;
