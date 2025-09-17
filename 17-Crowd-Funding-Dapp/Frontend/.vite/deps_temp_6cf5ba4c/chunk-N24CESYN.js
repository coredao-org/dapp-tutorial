import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  getThirdwebBaseUrl
} from "./chunk-QHKZ43P6.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";

// node_modules/thirdweb/dist/esm/analytics/track/index.js
async function track({ client, ecosystem, data }) {
  const fetch = getClientFetch(client, ecosystem);
  const event = {
    source: "sdk",
    ...data
  };
  return fetch(`${getThirdwebBaseUrl("analytics")}/event`, {
    method: "POST",
    body: stringify(event)
  }).catch(() => {
  });
}

export {
  track
};
//# sourceMappingURL=chunk-N24CESYN.js.map
