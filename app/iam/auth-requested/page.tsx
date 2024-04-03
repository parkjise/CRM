"use client";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import ParentCard from "@/app/(core)/components/shared/ParentCard";
import AuthNew2 from "@/app/(core)/components/crm/CrmAuthNew2";
import AuthDel2 from "@/app/(core)/components/crm/CrmAuthDel2";

const AuthRequestWrap = styled.div`
  width: 1000px;
  border: 1px solid #dfe5ef;
  background-color: #f8f8f8;
  .status {
    button {
      display: none;
    }
  }
  .modernize-kb9fe7-MuiCardHeader-root {
    .MuiCardHeader-title {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
const AuthRequest = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <AuthRequestWrap>
        <div className="ar-header">
          <h1></h1>
          <div className="object-key">
            <span>Object Key</span>
            <span>KA60202401098A0000006</span>
          </div>
        </div>
        <div className="ar-content">
          <h2>CRM(Service)Authorization Request</h2>
          <Grid container item xs={12}>
            <ParentCard title="RequesterInformation">
              <table>
                <tbody>
                  <tr>
                    <th>User ID</th>
                    <td>hg.bak</td>
                    <th>RequestedSystem</th>
                    <td>CRM(Service)</td>
                  </tr>
                  <tr>
                    <th>Name(KO)</th>
                    <td>박홍균</td>
                    <th>Name(EN)</th>
                    <td>HONGGYUNBAK</td>
                  </tr>
                  <tr>
                    <th>Departmen</th>
                    <td colSpan={3}>서비스기획팀</td>
                  </tr>
                </tbody>
              </table>
            </ParentCard>
          </Grid>
          <Grid container item xs={12} sx={{ mt: 4 }}>
            <ParentCard title="Current Authorization">
              <>
                <Box
                  sx={{ textAlign: "center", display: "flex", gap: "5px" }}
                  className="current-auth"
                >
                  <AuthNew2 />
                  <AuthDel2 />
                </Box>
              </>
            </ParentCard>
          </Grid>
        </div>
      </AuthRequestWrap>
    </Box>
  );
};
export default AuthRequest;
