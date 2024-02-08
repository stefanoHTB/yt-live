import { json } from "@remix-run/react";
import { Page } from "@shopify/polaris";
import React from "react";
import { authenticate } from "~/shopify.server";
// /store/test-youtubee/apps/yoyutbe-live/app/proxy

export async function loader({ request, params }: any) {
  console.log("----hit-------");
  console.log(request, "request");
  console.log(params, "params");

  const { admin } = await authenticate.public.appProxy(request);

  console.log(admin);

  return json({ data: "hello from remix" });
}

const api = () => {
  return <Page>api</Page>;
};

export default api;
