import React, { useState, useEffect, Fragment } from "react";
import { fetchSampleNFTData } from "../utils/fetchNFTs";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding-top: 24px;
  flex-direction: row;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 300px;
  height: 100%;
`;

const FiltersSection = styled.div`
  position: sticky;
  top: 0;
  padding: 8px;
  z-index: 100;
  font-family: "oakes-grotesk-regular", sans-serif;
`;

const FilterCheckbox = styled.input`
  margin-right: 8px;
`;

const FilterName = styled.span`
  margin-left: 8px;
`;

const FilterBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 0px 10px;
  height: 48px;
  font-size: 16px;
  text-align: left;
  border-radius: 24px;
  background-color: ${({ selected }) => (selected ? "#0c69c1" : "#f1f1f1")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const GridItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const GridItemImage = styled.img`
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: auto;
`;

const NFTNumber = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  color: #999;
  background-color: black;
  color: white;
  border-radius: 0 0 12px 12px;
`;


const filterOptions = [
    {
      name: "Full Greenhouse",
      check: (nft) =>
        nft.attributes.Architecture === "Greenhouse" && nft.attributes.Interior === "Overgrown",
    },
    {
      name: "Perfect Ramen",
      check: (nft) =>
        nft.attributes.Architecture === "Japanese Traditional" &&
        nft.attributes.Interior === "Ramen Shop" &&
        nft.attributes.Decoration === "Pork Noodles",
    },
    {
      name: "Brutalist Space",
      check: (nft) =>
        nft.attributes.Architecture === "Modern" && nft.attributes.Interior === "Space",
    },
    {
      name: "Full underpass",
      check: (nft) =>
        nft.attributes.Architecture === "Tokyo Street" &&
        nft.attributes.Midground === "Industrial" &&
        nft.attributes.Background === "Highway",
    },
    {
      name: "The Real hidden denza",
      check: (nft) =>
        nft.attributes.Architecture === "concrete denza" &&
        (nft.attributes.Car === "Tram" || nft.attributes.Car === "Tram Pink" || nft.attributes.Car === "Tram Green" || nft.attributes.Car === "Tram Tagged"),
    },
    {
      name: "Full Convenience Store",
      check: (nft) =>
        nft.attributes.Interior === "Midnight Breeze Shop" &&
        nft.attributes.Architecture === "Convenience Store" &&
        nft.attributes.Decoration === "GM Shop",
    },
    {
      name: "Water Elements",
      check: (nft) =>
        nft.attributes.Interior === "Fish Bowl" &&
        (nft.attributes.Background === "Beach" || nft.attributes.Background === "Island Sea") &&
        nft.attributes.Architecture === "Concrete Wave",
    },
    {
      name: "Cat's Dinner Bowl",
      check: (nft) =>
        nft.attributes.Sky_Element === "Cat Kami" && nft.attributes.Interior === "Fish Bowl",
    },
    {
      name: "Triple Pets",
      check: (nft) =>
        nft.attributes.Interior === "Tatami Shiba Cat" &&
        (nft.attributes.Character === "Bus Stop" || nft.attributes.Character === "Samu Frogs"),
    },
    {
      name: "Public Transport",
      check: (nft) =>
        (nft.attributes.Car === "Tram" || nft.attributes.Car === "Tram Pink" || nft.attributes.Car === "Tram Green" || nft.attributes.Car === "Tram Tagged") &&
        nft.attributes.Foreground === "Train Light" &&
        nft.attributes.Character === "Bus Stop",
    },
    {
      name: "Tropical",
      check: (nft) =>
        nft.attributes.Midground === "Palms" &&
        (nft.attributes.Background === "Beach" || nft.attributes.Background === "Island Sea"),
    },
  ];
  
  const FilterNFTs = () => {
    const [nfts, setNfts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchSampleNFTData();
        setNfts(data);
      };
  
      fetchData();
    }, []);
  
    const [selectedTraits, setSelectedTraits] = useState({});
  
    const filterNFTs = () => {
      return nfts.filter((nft) => {
        for (const filter of filterOptions) {
          if (selectedTraits[filter.name] && filter.check(nft)) {
            return true;
          }
        }
        return false;
      });
    };
  
    const handleCheckboxChange = (event) => {
      const filterName = event.target.name;
      const isChecked = event.target.checked;
  
      setSelectedTraits((prevSelectedTraits) => ({
        ...prevSelectedTraits,
        [filterName]: isChecked,
      }));
    };
  
    return (
      <Fragment>
        <MainContainer>
          <FiltersContainer>
            <FiltersSection>
              <h2>Community Traits</h2>
              {filterOptions.map((filter) => (
                <FilterBox key={filter.name} selected={selectedTraits[filter.name]}>
                  <FilterCheckbox
                    type="checkbox"
                    name={filter.name}
                    checked={selectedTraits[filter.name] || false}
                    onChange={handleCheckboxChange}
                  />
                  <FilterName>{filter.name}</FilterName>
                </FilterBox>
              ))}
            </FiltersSection>
          </FiltersContainer>
          <GridContainer>
            <Grid>
              {filterNFTs().map((nft) => {
                const openSeaUrl = `https://opensea.io/assets/ethereum/0xd9c036e9eef725e5aca4a22239a23feb47c3f05d/${nft.id}`;
  
                return (
                    <GridItem>
                        <GridItemImage src={nft.image} alt={nft.name} />
                        <NFTNumber>#{nft.id}</NFTNumber>
                    </GridItem>
                );
              })}
            </Grid>
          </GridContainer>
        </MainContainer>
      </Fragment>
    );
  };
  
  export default FilterNFTs;