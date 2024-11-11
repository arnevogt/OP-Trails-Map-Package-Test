// SPDX-FileCopyrightText: 2023 Open Pioneer project (https://github.com/open-pioneer)
// SPDX-License-Identifier: Apache-2.0
import { FC } from "react";
import {
    useCommonComponentProps,
    CommonComponentProps,
    SectionHeading,
    TitledSection
} from "@open-pioneer/react-utils";
import {
    Box,
    chakra,
    Divider,
    Flex,
    FormControl,
    FormLabel
} from "@open-pioneer/chakra-integration";
import { MapContainer, MapAnchor } from "@open-pioneer/map";
import { MAP_ID } from "./services";
import { ZoomIn, ZoomOut } from "@open-pioneer/map-navigation";

export interface MapComponentProps extends CommonComponentProps {
    textToShow: string;
}

export const MapComponent: FC<MapComponentProps> = (props) => {
    const { textToShow } = props;
    const { containerProps } = useCommonComponentProps("simple-ui", props);
    return (
        <Flex height="100%" direction="column" overflow="hidden">
            <TitledSection
                title={
                    <Box textAlign="center" py={1}>
                        <SectionHeading size={"md"}>{textToShow}</SectionHeading>
                    </Box>
                }
            >
                <Flex flex="1" direction="column" position="relative">
                    <MapContainer mapId={MAP_ID}>
                        <MapAnchor position="bottom-right" horizontalGap={10} verticalGap={30}>
                            <Flex direction="column" gap={1} padding={1}>
                                <ZoomIn mapId={MAP_ID} />
                                <ZoomOut mapId={MAP_ID} />
                            </Flex>
                        </MapAnchor>
                    </MapContainer>
                </Flex>
            </TitledSection>
        </Flex>
    );
};
