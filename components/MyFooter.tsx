import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { BsGithub, BsLinkedin} from "react-icons/bs";
export function MyFooter() {
    return (
        <Footer container className="mt-12">
            <FooterCopyright href="/" by="Edward Li" year={2024} />
            <FooterLinkGroup className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="https://www.linkedin.com/in/edward-li-2523032a8/" icon={BsLinkedin} target="_blank"/>
                <Footer.Icon href="https://github.com/ruizhili518" icon={BsGithub} target="_blank"/>
            </FooterLinkGroup>
        </Footer>
    );
}
