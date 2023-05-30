import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../data/dummy";
import MyMap from "../../../components/MyMap/MyMap";
import AddressForm from "./AddressForm";
import AddressHeader from "./AddressHeader";
import AddressFooter from "./AddressFooter";

function AddressDialog({
  handleCloseMap,
  latitude,
  longitude,
  location,
  setLocation,
  showForm,
  setShowForm,
}) {
  return (
    <Box display="flex" flexDirection="column" height="95vh">
      <Box height="60px" px={2} pt={1} zIndex={2}>
        <AddressHeader handleCloseMap={handleCloseMap} />
      </Box>
      <Divider variant="fullWidth" />
      {/* <Box height={showForm ? "90vh" : "75vh"}> */}
      <Box height="100%">
        {showForm ? (
          <AddressForm setShowForm={setShowForm} location={location} />
        ) : (
          <MyMap
            location={location}
            setLocation={setLocation}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </Box>
      <Box height="60px" zIndex={2}>
        <AddressFooter
          setShowForm={setShowForm}
          showForm={showForm}
          location={location}
        />
      </Box>
    </Box>
  );
}

export default AddressDialog;
