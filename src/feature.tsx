import { useFlag } from "@featurevisor/react";

export function Feature() {
	const featureKey = "someFeature";
	const context = new URLSearchParams(window.location.search).get("universe");
	const isEnabled = useFlag(featureKey, {
		universe: context,
	});

	if (isEnabled) {
		return <div>Amazing feature</div>;
	}

	return null;
}
