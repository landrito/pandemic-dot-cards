export type Region =
  | 'North America'
  | 'South America'
  | 'Africa'
  | 'Europe'
  | 'Asia'
  | 'Pacific Rim';

export type Affiliation = 'Ally' | 'Neutral' | 'Soviet';

export interface City {
  name: string;
  country: string;
  region: Region;
  affiliation: Affiliation;
}

export const REGIONS: Region[] = [
  'North America',
  'South America',
  'Africa',
  'Europe',
  'Asia',
  'Pacific Rim',
];
export const AFFILIATIONS = ['Ally', 'Neutral', 'Soviet'];
export const LOCATIONS: City[] = [
  {
    name: 'Atlanta',
    country: 'United States',
    region: 'North America',
    affiliation: 'Ally',
  },
  {
    name: 'Havana',
    country: 'Cuba',
    region: 'North America',
    affiliation: 'Soviet',
  },
  {
    name: 'Los Angeles',
    country: 'United States',
    region: 'North America',
    affiliation: 'Ally',
  },
  {
    name: 'Mexico City',
    country: 'Mexico',
    region: 'North America',
    affiliation: 'Neutral',
  },
  {
    name: 'New York',
    country: 'United States',
    region: 'North America',
    affiliation: 'Ally',
  },
  {
    name: 'San Francisco',
    country: 'United States',
    region: 'North America',
    affiliation: 'Ally',
  },
  {
    name: 'Toronto',
    country: 'Canada',
    region: 'North America',
    affiliation: 'Ally',
  },
  {
    name: 'Washington',
    country: 'United States',
    region: 'North America',
    affiliation: 'Ally',
  },
  {
    name: 'Algiers',
    country: 'Algeria',
    region: 'Africa',
    affiliation: 'Ally',
  },
  {
    name: 'Cairo',
    country: 'Egypt',
    region: 'Africa',
    affiliation: 'Soviet',
  },
  {
    name: 'Johannesburg',
    country: 'South Africa',
    region: 'Africa',
    affiliation: 'Ally',
  },
  {
    name: 'Khartoum',
    country: 'Sudan',
    region: 'Africa',
    affiliation: 'Neutral',
  },
  {
    name: 'Lagos',
    country: 'Nigeria',
    region: 'Africa',
    affiliation: 'Neutral',
  },
  {
    name: 'Leopoldville',
    country: 'Congo',
    region: 'Africa',
    affiliation: 'Neutral',
  },
  {
    name: 'Baghdad',
    country: 'Iraq',
    region: 'Asia',
    affiliation: 'Soviet',
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    region: 'Asia',
    affiliation: 'Neutral',
  },
  {
    name: 'Bombay',
    country: 'India',
    region: 'Asia',
    affiliation: 'Neutral',
  },
  {
    name: 'Calcutta',
    country: 'India',
    region: 'Asia',
    affiliation: 'Neutral',
  },
  {
    name: 'Delhi',
    country: 'India',
    region: 'Asia',
    affiliation: 'Neutral',
  },
  {
    name: 'Hanoi',
    country: 'Vietnam',
    region: 'Asia',
    affiliation: 'Soviet',
  },
  {
    name: 'Karachi',
    country: 'Pakistan',
    region: 'Asia',
    affiliation: 'Neutral',
  },
  {
    name: 'Novosibirsk',
    country: 'Russia',
    region: 'Asia',
    affiliation: 'Soviet',
  },
  {
    name: 'Peking',
    country: 'China',
    region: 'Asia',
    affiliation: 'Soviet',
  },
  {
    name: 'Pyongyang',
    country: 'Korea',
    region: 'Asia',
    affiliation: 'Soviet',
  },
  {
    name: 'Riyadh',
    country: 'Saudi Arabia',
    region: 'Asia',
    affiliation: 'Neutral',
  },
  {
    name: 'Saigon',
    country: 'Vietnam',
    region: 'Asia',
    affiliation: 'Ally',
  },
  {
    name: 'Shanghai',
    country: 'China',
    region: 'Asia',
    affiliation: 'Soviet',
  },
  {
    name: 'Bogota',
    country: 'Colombia',
    region: 'South America',
    affiliation: 'Neutral',
  },
  {
    name: 'Buenos Aires',
    country: 'Argentina',
    region: 'South America',
    affiliation: 'Neutral',
  },
  {
    name: 'Lima',
    country: 'Peru',
    region: 'South America',
    affiliation: 'Neutral',
  },
  {
    name: 'Santiago',
    country: 'Chile',
    region: 'South America',
    affiliation: 'Neutral',
  },
  {
    name: 'Sao Paulo',
    country: 'Brazil',
    region: 'South America',
    affiliation: 'Neutral',
  },
  {
    name: 'East Berlin',
    country: 'Germany',
    region: 'Europe',
    affiliation: 'Soviet',
  },
  {
    name: 'Istanbul',
    country: 'Turkey',
    region: 'Europe',
    affiliation: 'Ally',
  },
  {
    name: 'Kiev',
    country: 'Russia',
    region: 'Europe',
    affiliation: 'Soviet',
  },
  {
    name: 'Leningrad',
    country: 'Russia',
    region: 'Europe',
    affiliation: 'Soviet',
  },
  {
    name: 'London',
    country: 'England',
    region: 'Europe',
    affiliation: 'Ally',
  },
  {
    name: 'Madrid',
    country: 'Spain',
    region: 'Europe',
    affiliation: 'Neutral',
  },
  {
    name: 'Moscow',
    country: 'Russia',
    region: 'Europe',
    affiliation: 'Soviet',
  },
  {
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    affiliation: 'Ally',
  },
  {
    name: 'Prague',
    country: 'Czech Republic',
    region: 'Europe',
    affiliation: 'Soviet',
  },
  {
    name: 'Rome',
    country: 'Italy',
    region: 'Europe',
    affiliation: 'Ally',
  },
  {
    name: 'Warsaw',
    country: 'Poland',
    region: 'Europe',
    affiliation: 'Soviet',
  },
  {
    name: 'Jakarta',
    country: 'Indonesia',
    region: 'Pacific Rim',
    affiliation: 'Neutral',
  },
  {
    name: 'Manila',
    country: 'Philippines',
    region: 'Pacific Rim',
    affiliation: 'Neutral',
  },
  {
    name: 'Osaka',
    country: 'Japan',
    region: 'Pacific Rim',
    affiliation: 'Neutral',
  },
  {
    name: 'Sydney',
    country: 'Australia',
    region: 'Pacific Rim',
    affiliation: 'Ally',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    region: 'Pacific Rim',
    affiliation: 'Neutral',
  },
];

export function cityComparator(k: keyof City) {
  return (a: City, b: City): number => {
    return a[k].localeCompare(b[k]);
  };
}
