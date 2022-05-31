import { getDateFromEpoch } from 'constants/helpers';

export default class HashTag {
  constructor() {
    this.name = '';
    this.displayName = '';
    this.id = null;
    this.createdDate = null;
    this.meshTags = [];
    this.active = true;
    this.parentTag = null;
    this.description = '';
    this.tagSubType = null;
  }
  fromProps({
    name = '',
    imageUrl,
    displayName = '',
    id,
    createdDate,
    meshTags,
    active,
    tagType,
    color,
    parentTag,
    description,
    tagSubType,
  }) {
    this.name = name;
    this.displayName = displayName;
    this.id = id;
    this.createdDate = createdDate;
    this.meshTags = meshTags;
    this.imageUrl = imageUrl;
    this.active = active;
    this.tagType = tagType;
    this.color = color;
    this.parentTag = parentTag;
    this.description = description;
    this.tagSubType = tagSubType;
  }

  fromJSON(json) {
    if (!json) return;
    const name = json.name;
    const displayName = json.displayName;
    const id = json.uuid;
    const createdDate = json.createdTS && getDateFromEpoch(json.createdTS);
    const imageUrl = json.imageUrl;
    const meshTags = [];
    if (json.meshTags) {
      json.meshTags.forEach((meshTagJson) => {
        const meshTag = new MeshTag(meshTagJson.uuid, meshTagJson.name);
        meshTags.push(meshTag);
      });
    }
    const tagType = json.tagType;
    const active = Object.is(json.active, undefined) ? true : json.active;
    const color = json.color;
    let parentTag;
    if (json.parentTag) {
      parentTag = new HashTag();
      parentTag.fromJSON(json.parentTag);
    }
    const description = json.description;
    const tagSubType = json.tagSubType;
    this.fromProps({
      name,
      imageUrl,
      displayName,
      id,
      createdDate,
      meshTags,
      active,
      tagType,
      color,
      parentTag,
      description,
      tagSubType,
    });
  }
  addStatsFromJSON(statsJSON) {
    if (statsJSON) {
      this.stats = {
        score: statsJSON.score || 0,
        count: statsJSON.count || 0,
        appreciativeFeedbackCount: statsJSON.appreciativeFeedbackCount || 0,
        constructiveFeedbackCount: statsJSON.constructiveFeedbackCount || 0,
        benchmarkScore: statsJSON.benchmarkScore || 0,
        level: statsJSON.level,
      };
    }
  }
}

class MeshTag {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

function tag({ name, displayName, id }) {
  return {
    name,
    displayName,
    id,
  };
}

function stats({
  score = 0,
  count = 0,
  appreciativeFeedbackCount = 0,
  constructiveFeedbackCount,
  benchmarkScore,
  level,
}) {
  return {
    score,
    count,
    appreciativeFeedbackCount,
    constructiveFeedbackCount,
    benchmarkScore,
    level,
  };
}

function tagWithJSONBuilder() {
  const result = {};

  function addStatsFromJSON(json) {
    const statsJSON = json.stats;
    Object.assign(
      result,
      stats({
        score: statsJSON.score || 0,
        count: statsJSON.count || 0,
        appreciativeFeedbackCount: statsJSON.appreciativeFeedbackCount || 0,
        constructiveFeedbackCount: statsJSON.constructiveFeedbackCount || 0,
        benchmarkScore: statsJSON.benchmarkScore || 0,
        level: statsJSON.level,
      }),
    );
  }
  return {
    addStatsFromJSON,
    result,
  };
}
