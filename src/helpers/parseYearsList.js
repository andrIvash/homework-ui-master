export const parseYearsList = data => [...new Set(data["PIG POPULATIONS"].map(elem => elem.year))];
