class Timeline {
  reviewStage: string;
  startDate: number;
  endDate: number;
  isEnableAutoSubmit: boolean;

  constructor(json: any) {
    this.fromJSON(json);
  }

  fromJSON(res: any = {}) {
    this.reviewStage = res.reviewStage;
    this.startDate = res.startDate;
    this.endDate = res.endDate;
    this.isEnableAutoSubmit = res.isEnableAutoSubmit || false;
  }
}

export default Timeline;
