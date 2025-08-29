// @ts-nocheck
import { Avatar, Button, Column, Heading, Icon, IconButton, Media, Tag, Text, Meta, Schema, Row } from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

// Adicione as interfaces aqui
interface Person {
  name: string;
  role: string;
  avatar: string;
  location: string;
  languages?: string[];
}

interface SocialItem {
  name: string;
  link: string;
  icon: string;
}

interface Experience {
  company: string;
  timeframe: string;
  role: string;
  achievements?: string[];
  images?: {
    width: number;
    height: number;
    alt: string;
    src: string;
  }[];
}

interface Institution {
  name: string;
  description: string;
}

interface Skill {
  title: string;
  description: string;
  tags?: {
    icon: string;
    name: string;
  }[];
  images?: {
    width: number;
    height: number;
    alt: string;
    src: string;
  }[];
}

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map((e: Experience) => String(e.company)) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map((i: Institution) => String(i.name)) },
    { title: about.technical.title, display: about.technical.display, items: about.technical.skills.map((s: Skill) => String(s.title)) },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column className={styles.avatar} position="sticky" minWidth={160} paddingX="l" paddingBottom="xl" gap="m" flex={3} horizontal="center">
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages?.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language: string) => <Tag key={language} size="l">{language}</Tag>)}
              </Row>
            )}
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column id={String(about.intro.title)} fillWidth minHeight={160} vertical="center" marginBottom="32">
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{ backdropFilter: "blur(var(--static-space-1))" }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton href={about.calendar.link} data-border="rounded" variant="secondary" icon="chevronRight" />
              </Row>
            )}

            <Heading className={styles.textAlign} variant="display-strong-xl">{person.name}</Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">{person.role}</Text>

            {social?.length > 0 && (
              <Row className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map((item: SocialItem) =>
                  item.link && <Button key={String(item.name)} href={item.link} prefixIcon={item.icon} label={item.name} size="s" weight="default" variant="secondary" />
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">{about.intro.description}</Column>
          )}

          {about.work.display && about.work.experiences?.map((experience: Experience) => (
            <Column key={String(experience.company)} fillWidth>
              <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                <Text id={String(experience.company)} variant="heading-strong-l">{experience.company}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">{experience.timeframe}</Text>
              </Row>
              <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">{experience.role}</Text>
              <Column as="ul" gap="16">
                {experience.achievements?.map((achievement: string) => <Text key={achievement} as="li" variant="body-default-m">{achievement}</Text>)}
              </Column>

              {experience.images?.length > 0 && (
                <Row fillWidth paddingTop="m" gap="12" wrap>
                  {experience.images.map((image: { width: number; height: number; alt: string; src: string; }, iidx: number) => (
                    <Row key={`${experience.company}-${iidx}`} border="neutral-medium" radius="m" minWidth={Number(image.width)} height={Number(image.height)}>
                      <Media enlarge radius="m" sizes={String(image.width)} alt={image.alt} src={image.src} />
                    </Row>
                  ))}
                </Row>
              )}
            </Column>
          ))}

          {about.studies.display && about.studies.institutions?.map((institution: Institution) => (
            <Column key={String(institution.name)} fillWidth gap="4">
              <Text id={String(institution.name)} variant="heading-strong-l">{institution.name}</Text>
              <Text variant="heading-default-xs" onBackground="neutral-weak">{institution.description}</Text>
            </Column>
          ))}

          {about.technical.display && about.technical.skills?.map((skill: Skill) => (
            <Column key={String(skill.title)} fillWidth gap="4">
              <Text id={String(skill.title)} variant="heading-strong-l">{skill.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{skill.description}</Text>

              {skill.tags?.length > 0 && (
                <Row wrap gap="8" paddingTop="8">
                  {skill.tags.map((tag: { icon: string; name: string; }) => <Tag key={String(tag.name)} size="l" prefixIcon={tag.icon}>{tag.name}</Tag>)}
                </Row>
              )}

              {skill.images?.length > 0 && (
                <Row fillWidth paddingTop="m" gap="12" wrap>
                  {skill.images.map((image: { width: number; height: number; alt: string; src: string; }, iidx: number) => (
                    <Row key={`${skill.title}-${iidx}`} border="neutral-medium" radius="m" minWidth={Number(image.width)} height={Number(image.height)}>
                      <Media enlarge radius="m" sizes={String(image.width)} alt={image.alt} src={image.src} />
                    </Row>
                  ))}
                </Row>
              )}
            </Column>
          ))}

        </Column>
      </Row>
    </Column>
  );
}