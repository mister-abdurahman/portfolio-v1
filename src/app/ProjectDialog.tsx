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
        <Box className="w-[70vw] bg-primary rounded-md">
          <Box className="bg-primary relative w-full h-[15rem] rounded-tr-md rounded-tl-md overflow-hidden">
            <Button
              onClick={handleClose}
              variant="contained"
              className="absolute right-5 top-5 bg-secondary text-primary font-semibold"
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
              <div className="flex gap-2">
                {selectedProj?.tools.map((el, i) => (
                  <Toolbtn key={i} name={el} />
                ))}
              </div>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Box className="flex gap-6 pt-8">
              <a href="">
                <Button className="bg-secondary font-semibold uppercase shadow-lg text-primary hover:bg-secondary_light transition-colors duration-500">
                  Live Demo{" "}
                  <BsFillArrowUpRightSquareFill className="ml-2 w-5" />
                </Button>
              </a>
              <a href="">
                <Button className="bg-white font-semibold uppercase text-secondary shadow-lg hover:bg-gray-50 transition-colors duration-500">
                  Github Repo <BsFillArrowUpRightSquareFill className="ml-2" />
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
