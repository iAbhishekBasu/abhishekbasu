import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To My Portfolio
			</SectionTitle>
			<SectionText>
				Hello World!
				<br /> I am Abhishek Basu, an undergrad, majoring in Computer
				Science and Engineering <br />
				at the National Institute of Technology ,Durgapur
			</SectionText>
			<Button onClick={() => (window.location = "https://www.google.com")}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
