// SPDX-FileCopyrightText: 2023 Open Pioneer project (https://github.com/open-pioneer)
// SPDX-License-Identifier: Apache-2.0
import { Flex } from "@open-pioneer/chakra-integration";
import { MapComponent } from "map-package";
import { useIntl } from "open-pioneer:react-hooks";

export function SampleApp() {
    const intl = useIntl();

    return (
        <Flex height="100%" direction="column" overflow="hidden">
            <MapComponent textToShow="Test"></MapComponent>
        </Flex>
    );
}
