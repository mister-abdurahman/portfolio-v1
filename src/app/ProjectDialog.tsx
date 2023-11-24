import { Modal, Typography, Box, Fade, Button } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { cardType } from "./portfolio";
import Toolbtn from "./toolbtn";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export default function ProjectDialog({
  openModal,
  setOpenModal,
  selectedProj,
}: {
  openModal: boolean;
  setOpenModal: (x: boolean) => void;
  selectedProj: cardType | null;
}) {
  function handleClose() {
    setOpenModal(false);
  }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center"
    >
      <Fade in={openModal}>
        <Box className="w-[85vw] sm:w-[70vw] my-10 bg-primary rounded-md">
          <Box className="bg-primary relative w-full h-36 sm:h-[15rem] rounded-tr-md rounded-tl-md overflow-hidden">
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                backgroundColor: "#313bac",
                position: "absolute",
                top: "1.3rem",
                right: "1.3rem",
                fontWeight: "700",
              }}
            >
              Close
            </Button>
            <Image
              src={selectedProj?.image!}
              alt=""
              className="w-full h-full overflow-hidden object-cover"
              placeholder="blur"
            />
          </Box>
          <Box className="p-8">
            <div className="flex justify-between items-center flex-wrap">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="capitalize"
              >
                {selectedProj?.title}
              </Typography>
              <div className="flex gap-2 flex-wrap">
                {selectedProj?.tools.map((el, i) => (
                  <Toolbtn key={i} name={el} />
                ))}
              </div>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {selectedProj?.readme}
            </Typography>
            <Box className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-8">
              <a href={selectedProj?.live_demo} target="_blank">
                <button className="bg-secondary px-6 py-3 text-sm sm:text-base rounded-md flex items-center font-semibold uppercase shadow-lg text-primary hover:bg-secondary_light transition-colors duration-500">
                  Live Demo{" "}
                  <BsFillArrowUpRightSquareFill className="ml-2 w-5" />
                </button>
              </a>
              <a href={selectedProj?.github_link} target="_blank">
                <button className="bg-white px-6 py-3 text-sm sm:text-base rounded-md flex items-center font-semibold uppercase text-secondary shadow-lg hover:bg-gray-50 transition-colors duration-500">
                  Github Repo <BsFillArrowUpRightSquareFill className="ml-2" />
                </button>
              </a>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
