import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface SlackConfirmEmailProps {
    msg: string,
    fullname: string
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  export const SlackConfirmEmail = ({
    fullname,
    msg,
  }: SlackConfirmEmailProps) => (
    <Html>
      <Head />
      <Preview>Hi, thanks for contacting me {fullname}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
            src={`${baseUrl}/next.svg`}
              width="120"
              height="36"
              alt="Slack"
            />
          </Section>
          <Heading style={h1}>Hi, {fullname}</Heading>
          <Text style={heroText}>
            Thank you for contacting me, your message:
          </Text>
  
          <Section style={codeBox}>
            <Text style={confirmationCodeText}>{msg}</Text>
          </Section>
  
          <Text style={heroText}>
            has been received, I will reply as soon as possible.
          </Text>
  
          <Section>
            <Row style={footerLogos}>
              <Column style={{ width: '66%' }}>
                <Img
                  src={`${baseUrl}/next.svg`}
                  width="120"
                  height="36"
                  alt="Portfolio"
                />
              </Column>
              <Column>
                <Row>
                  <Column>
                    <Link href="https://github.com/eins87">
                      <Img
                        src={`${baseUrl}/static/tw.png`}
                        width="32"
                        height="32"
                        alt="Github"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://www.instagram.com/andi.winata87">
                      <Img
                        src={`${baseUrl}/static/ig.png`}
                        width="32"
                        height="32"
                        alt="instagram"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://twitter.com/Eins_Andi">
                      <Img
                        src={`${baseUrl}/static/tw.png`}
                        width="32"
                        height="32"
                        alt="tweeter"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
  
          <Section>
            <Link
              style={footerLink}
              href={baseUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={`${baseUrl}/about`}
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={`${baseUrl}/projects`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Projects
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={`${baseUrl}/assets/cv/Andi_Winata_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              data-auth="NotApplicable"
              data-linkindex="6"
            >
              Download CV
            </Link>
            <Text style={footerText}>
              ©2024 Andi Winata <br />
              Tangerang, Banten, Indonesia <br />
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  const footerText = {
    fontSize: '12px',
    color: '#b7b7b7',
    lineHeight: '15px',
    textAlign: 'left' as const,
    marginBottom: '50px',
  };
  
  const footerLink = {
    color: '#b7b7b7',
    textDecoration: 'underline',
  };
  
  const footerLogos = {
    marginBottom: '32px',
    paddingLeft: '8px',
    paddingRight: '8px',
    width: '100%',
  };
  
  const socialMediaIcon = {
    display: 'inline',
    marginLeft: '32px',
  };
  
  const main = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    maxWidth: '600px',
    margin: '0 auto',
  };
  
  const logoContainer = {
    marginTop: '32px',
  };
  
  const h1 = {
    color: '#1d1c1d',
    fontSize: '36px',
    fontWeight: '700',
    margin: '30px 0',
    padding: '0',
    lineHeight: '42px',
  };
  
  const heroText = {
    fontSize: '20px',
    lineHeight: '28px',
    marginBottom: '30px',
  };
  
  const codeBox = {
    background: 'rgb(245, 244, 245)',
    borderRadius: '4px',
    marginRight: '50px',
    marginBottom: '30px',
    padding: '43px 23px',
  };
  
  const confirmationCodeText = {
    fontSize: '18px',
    textAlign: 'left' as const,
    verticalAlign: 'middle',
  };
  
  const text = {
    color: '#000',
    fontSize: '14px',
    lineHeight: '24px',
  };
  