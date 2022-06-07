import { Box, Popover, PopoverTrigger } from '@chakra-ui/react';
import Avatar, { AvatarProps } from '@uiToolkit/Avatar';
import React, { FC } from 'react';
import { Header, PopoverContentWrapper } from './OwnerCollaboratorsPopup.style';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { TextLabelSmall } from '@uiToolkit/Typography';
import Listitem from '@uiToolkit/Listitem';
import { StaticImageData } from 'next/image';

//employee type
export type EmployeeType = {
  name: string;
  imgSrc: string | StaticImageData;
  role?: string;
};

export interface OwnerCollaboratorsPopupProps {
  owners: EmployeeType[];
  collaborators: EmployeeType[];
  referenceEl: React.ReactElement;
}

//heading sub component
const RenderHeading = ({ label }: { label: string }) => (
  <Header>
    <TextLabelSmall fontWeight={500}>{label}</TextLabelSmall>
    <TextLabelSmall cursor={'pointer'} fontWeight={500}>
      Edit
    </TextLabelSmall>
  </Header>
);

//MAIN COMPONENT STARTS HERE
export const OwnerCollaboratorsPopup: FC<OwnerCollaboratorsPopupProps> = ({ referenceEl, owners, collaborators }) => {
  const theme: ThemeType = useTheme();

  //render employee details
  const renderEmployeeDetails = (employees: EmployeeType[]) => {
    const employeeListItems = employees.map((employee: EmployeeType, index: number) => {
      const leftComponent = <Avatar size="medium" src={employee.imgSrc} />;

      //replace key value with id on integration
      return <Listitem key={index} leftComponent={leftComponent} title={employee.name} subTitle={employee.role} />;
    });
    return <Box>{employeeListItems}</Box>;
  };

  return (
    <Popover offset={[0, 0]} placement="bottom-end">
      <PopoverTrigger>
        <Box width={'fit-content'}>{referenceEl}</Box>
      </PopoverTrigger>
      <PopoverContentWrapper _focus={{ boxShadow: theme.shadows.light }}>
        <RenderHeading label="OWNERS" />
        {renderEmployeeDetails(owners)}
        <RenderHeading label="COLLABORATORS" />
        {renderEmployeeDetails(collaborators)}
      </PopoverContentWrapper>
    </Popover>
  );
};
