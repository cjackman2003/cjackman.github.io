// Modules
import { Container, Heading, SimpleGrid, Box, IconButton, Link, HStack, Show } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import NextLink from "next/link"
import React, { useState } from 'react'
import { motion } from "framer-motion"
// Icons
import { TriangleUpIcon } from "@chakra-ui/icons"
import { MdViewAgenda } from "react-icons/md"
import { IoGrid } from "react-icons/io5"
import { ProjectItem } from "../components/project-item"
// Thumbnails
import graphiteThumb from "../public/images/FRM.png"

const Projects = () => {
    const [grid, setGrid] = useState([1,1,2])
    const [gridType, setGridType] = useState("columns")
    const toggleGrid = () => {
        if (gridType === "columns") {
            setGrid([1,1,1])
            setGridType("rows")
        }
        else if (gridType === "rows") {
            setGrid([1,1,2])
            setGridType("columns")
        }
    }

    return (
        <Layout>
            <Container mt = "15%" id = "start">
                <Heading fontSize = {20} mb = {4} variant = "section-title">
                    Projects
                </Heading>

                <Show above = 'md'>
                    <HStack>
                        <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                            <IconButton onClick = {toggleGrid} w = {10} h = {10} p = {2} variant = "custom" cursor = "pointer" as = {gridType === "columns" ? IoGrid : MdViewAgenda}/>
                        </motion.div>
                    </HStack>
                </Show>
                
                <motion.div layout transition = {{type: "spring", stiffness: 700, damping: 30}}>
                    <SimpleGrid columns = {grid} gap = {10} mt = {10}>
                        <Box>
                            <ProjectItem id = "FinancialRiskMitigator" title = "Financial Risk Mitigator" src = {graphiteThumb} href = "https://devpost.com/software/financial-risk-mitigator">
                            Using real data from stocks, bonds, interest, and many other indicators, we made a tool that allows the user to make educated decisions based on how risky both their portfolio and the markets are.
                            </ProjectItem>
                        </Box>

                    </SimpleGrid>
                </motion.div>
        
                <Box align = "right" mt = "10%">
                    <NextLink href = "#top" passHref>
                        <Link>
                            <IconButton variant = "custom" icon = {<TriangleUpIcon />} />
                        </Link>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Projects