import { expect, test } from "vitest";
import { simpleFunction } from "./simpleFunction";

test('should return "Only for testing" string', () => {
	expect(simpleFunction()).toBe("Only for testing");
});
