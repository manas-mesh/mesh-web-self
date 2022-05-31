import { useAppSelector } from '@hooks/reduxHooks';
import { ReviewNavBarComp } from 'components/ReviewForm/reviewNavBarComp';
import { shallowEqual } from 'react-redux';
import { selectNavBarCustomItems } from 'store/selectors/navBarCustomItems';

export const CUSTOM_NAV_BAR_COMP_KEYS = {
  REVIEW_FILLING: 'REVIEW_FILLING',
};
export const CUSTOM_NAV_BAR_COMPS = {
  [CUSTOM_NAV_BAR_COMP_KEYS.REVIEW_FILLING]: ReviewNavBarComp,
};
export const NavBarCustomFeatureItems = () => {
  const items = useAppSelector(selectNavBarCustomItems, shallowEqual);

  return Object.keys(items).map((key) => {
    const Comp = CUSTOM_NAV_BAR_COMPS[key];
    return <Comp key={key} {...items[key]} />;
  });
};
