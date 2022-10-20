/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  username: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Collection
 * 
 */
export type Collection = {
  id: string
  collectionName: string | null
  collectionURI: string
  infoId: string
  ownerId: string
  solarRadiation: int
  temperature: int
  humidity: int
  precipitation: int
  atmosphericPressure: int
  wind: int
  createdAt: Date
  updatedAt: Date
}

/**
 * Model CollectionInfo
 * 
 */
export type CollectionInfo = {
  id: string
  collectionName: string | null
  collectionURI: string
  solarRadiation: int
  temperature: int
  humidity: int
  precipitation: int
  atmosphericPressure: int
  wind: int
  createdAt: Date
  updatedAt: Date
}

/**
 * Model NFT
 * 
 */
export type NFT = {
  id: string
  format: string
  tokenId: string | null
  name: string | null
  image: string | null
  description: string | null
  metaData: string | null
  collectionId: string
  ownerId: string
  solarRadiation: int
  temperature: int
  humidity: int
  precipitation: int
  atmosphericPressure: int
  wind: int
  createdAt: Date
  updatedAt: Date
}

/**
 * Model NFTRevision
 * 
 */
export type NFTRevision = {
  id: string
  nftId: string
  tokenId: string | null
  name: string | null
  image: string | null
  description: string | null
  metaData: string | null
  solarRadiation: int
  temperature: int
  humidity: int
  precipitation: int
  atmosphericPressure: int
  wind: int
  createdAt: Date
  updatedAt: Date
}
