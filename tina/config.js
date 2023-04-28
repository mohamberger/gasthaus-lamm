import { defineConfig } from "tinacms";
import { accommodationFields } from "./templates";
import { anlassFields } from "./templates";
import { wohnungFields } from "./templates";
import { defaultFields } from "./templates";
import { furnishingFields } from "./templates";
import { gastronomieFields } from "./templates";
import { homeFields } from "./templates";
import { labelFields } from "./templates";
import { locationFields } from "./templates";
import { metaFields } from "./templates";
import { newsFields } from "./templates";
import { zimmerFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "2995bb02-39ae-4483-97c2-65e59b140612", // Get this from tina.io
  token: "f78e6544e9e8f51e898da84c2dc0feb2c7afb3d5", // Get this from tina.io
  client: { skip: true },
  build: {
    host: "0.0.0.0",
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Startseite",
        name: "startseite",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "title_emotional",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "image",
            name: "images",
            label: "Bilder",
            list: true,
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "News",
        name: "news",
        path: "content/news",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...newsFields(),
        ],
      },
      {
        format: "md",
        label: "Schlafen",
        name: "schlafen",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "schlafen",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover",
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "Zimmer",
        name: "zimmer",
        path: "content/zimmer",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...zimmerFields(),
        ],
      },
      {
        format: "md",
        label: "Wohnungen",
        name: "wohnungen",
        path: "content/wohnungen",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...wohnungFields(),
        ],
      },
      {
        format: "md",
        label: "Unterkunft",
        name: "unterkunft",
        path: "content/unterkunft",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...accommodationFields(),
        ],
      },
      {
        format: "md",
        label: "Locations",
        name: "locations",
        path: "content/locations",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...locationFields(),
        ],
      },
      {
        format: "md",
        label: "Feiern",
        name: "feiern",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "feiern",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover",
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "Anlass",
        name: "anlass",
        path: "content/anlass",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...anlassFields(),
        ],
      },
      {
        format: "md",
        label: "Essen",
        name: "essen",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "essen",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "title_emotional",
            label: "Emotionaler Titel",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover",
          },
          ...metaFields(),
        ],
      },
      {
        format: "md",
        label: "Gastronomie",
        name: "gastronomie",
        path: "content/gastronomie",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...gastronomieFields(),
        ],
      },
    ],
  },
});
