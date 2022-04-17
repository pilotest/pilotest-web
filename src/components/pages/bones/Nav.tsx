import React from "react";
import { Navbar, Group, Code, ScrollArea, createStyles, Text } from "@mantine/core";
import {
  Notes,
  CalendarStats,
  Plus,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
} from "tabler-icons-react";

import { LinksGroup } from "../../molecules/LinksGroup";
import { UserButton } from "../../molecules/UserButton";


const mockdata = [
  { label: "Add New Test List", icon: Plus },
  {
    label: "Inbound Station Tests",
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: "Test 1", link: "/" },
      { label: "Test 2", link: "/" },
    ],
  },
];

const Nav = () => {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Text>Pilotest</Text>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>

      </Navbar.Section>
    </Navbar>
  );
};

export default Nav;

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));
