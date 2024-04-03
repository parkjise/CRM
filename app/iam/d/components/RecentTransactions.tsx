import React from 'react';
import DashboardCard from '@/app/(core)/components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import {Box, Link, Typography,Button } from '@mui/material';
import styled from "styled-components";
const Transactions = styled.div`
  > div{
    margin-bottom: 20px;
  }
  h3{
    font-size:18px;
  }
  .transactions{
      margin-left:10px;
  }
  @media(max-width:1200px){
    h3{
      font-size:14px
    }
    .gray{
      font-size:11px;
    }
    .gray{
      padding: 3px 5px;
    }
    .transactions{
      margin: 5px 0;;
    }
  }
`
const RecentTransactions = () => {
  return (
    <DashboardCard title="">
      <Transactions>
        <Box sx={{display:"flex", gap:"10px"}}>
          <Typography variant="h3">
            Recent Transactions
          </Typography>
          <Button variant="outlined" className="btn-outline gray">
            Data Transfer
          </Button>
        </Box>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <span>Payment received from John Doe of $385.90</span>
                <Button variant="outlined" className='btn-outline gray transactions' >#DM-0001</Button>
              </Box>
              <Link href='#' color={"#7b7b7b"} underline="none">드림텍</Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">New sale recorded</Typography>{' '}
              <Link href="/" underline="none">
                #ML-3467
              </Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Payment was made of $64.95 to Michael</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">New sale recorded</Typography>{' '}
              <Link href="/" underline="none">
                #ML-3467
              </Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">New arrival recorded</Typography>{' '}
              <Link href="/" underline="none">
                #ML-3467
              </Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Payment Done</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Transactions>
    </DashboardCard>
  );
};

export default RecentTransactions;
