import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AccountProfile from "@/app/iam/d/components/AccountProfile";
import AccountActivity from "@/app/iam/d/components/AccountActivity";
export default function AccountMg() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<i className="ri-profile-line"></i>} iconPosition="start" label="Profile" value="1" />
            <Tab icon={<i className="ri-time-line"></i>} iconPosition="start" label="Activity" value="2" />
            <Tab icon={<i className="ri-shield-user-line"></i>} iconPosition="start" label="IAM" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><AccountProfile /></TabPanel>
        <TabPanel value="2"><AccountActivity /></TabPanel>
        <TabPanel value="3">IAM </TabPanel>
      </TabContext>
    </Box>
  );
}