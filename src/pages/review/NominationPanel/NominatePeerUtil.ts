interface IFilter {
  name: string;
  maxPeers: number;
  minPeers: number;
}

export class NominatePeerUtil {
  public static getFilters(filtersObj: any) {
    let finalObj: IFilter[] = [];
    for (const [key, value] of Object.entries<any>(filtersObj)) {
      const obj = {
        name: getFilterName(key),
        maxPeers: value.maxPeers,
        minPeers: value.minPeers,
      };
      finalObj = [...finalObj, obj];
    }
    return finalObj;
  }

  public static getList(filter: string, list: any) {
    const filtered = list && list.length > 0 && list.filter((item: any) => item.peerType === filter);
    return filtered;
  }

  public static getLevelData(data: any) {
    return data && data.length > 0 && data.filter((item: any) => item.name === 'All org')[0];
  }
}

export const getReviewerLevelHeading = (filter: string, min: number, max: number): string => {
  let finalstr = '';
  if (filter === 'ALL_ORG') finalstr = `Add ${min}-${max} reviewers across All org`;
  // if (filter === 'ALL_ORG') finalstr = 'All org';
  // if (filter === 'ALL_ORG') finalstr = 'All org';
  // if (filter === 'ALL_ORG') finalstr = 'All org';
  return finalstr;
};

const getFilterName = (key: string): string => {
  let finalstr = '';
  if (key === 'ALL_ORG') finalstr = 'All org';
  if (key === 'ALL_ORG') finalstr = 'All org';
  if (key === 'ALL_ORG') finalstr = 'All org';
  if (key === 'ALL_ORG') finalstr = 'All org';
  return finalstr;
};
