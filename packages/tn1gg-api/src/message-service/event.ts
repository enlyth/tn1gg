export enum EventType {
  PermitGranted = "PERMIT_GRANTED",
  WorkStop = "WORK_STOP",
  WorkStart = "WORK_START",
  PermitSubmitted = "PERMIT_SUBMITTED",
  PermitAlterationGranted = "PERMIT_ALTERATION_GRANTED",
  PermitRevoked = "PERMIT_REVOKED",
  PermitCancelled = "PERMIT_CANCELLED",
  ActivityCreated = "ACTIVITY_CREATED",
  PermitRefused = "PERMIT_REFUSED",
  WorkStartReverted = "WORK_START_REVERTED",
  ActivityUpdated = "ACTIVITY_UPDATED",
  WorkStopReverted = "WORK_STOP_REVERTED",
  ActivityCancelled = "ACTIVITY_CANCELLED",
}

type ObjectType = "PERMIT" | "ACTIVITY";

type WorkCategory =
  | "Minor"
  | "Standard"
  | "Major"
  | "Major (PAA)"
  | "Immediate - urgent"
  | "Immediate - emergency"
  | "HS2 (Highway)";

type WorkCategoryRef =
  | "minor"
  | "standard"
  | "major"
  | "paa"
  | "immediate_urgent"
  | "immediate_emergency"
  | "hs2_highway";

type TrafficManagementTypeRef =
  | "give_and_take"
  | "some_carriageway_incursion"
  | "no_carriageway_incursion"
  | "two_way_signals"
  | "road_closure"
  | "multi_way_signals"
  | "lane_closure"
  | "stop_go_boards"
  | "contra_flow"
  | "priority_working"
  | "convoy_workings";

type WorkStatusRef = "planned" | "completed" | "in_progress" | "cancelled";

type PermitStatus =
  | "granted"
  | "closed"
  | "submitted"
  | "revoked"
  | "cancelled"
  | "refused"
  | "progressed"
  | "permit_modification_request";

type WorkStatus =
  | "Works planned"
  | "Works completed"
  | "Works in progress"
  | "Works cancelled";

export interface RoadworksEventMessage {
  event_type: EventType;
  object_type: ObjectType;
  event_reference: number;
  event_time: string;
  object_reference: string;
  version: number;
  object_data: {
    work_reference_number?: string;
    permit_reference_number?: string;
    promoter_swa_code?: string;
    promoter_organisation?: string;
    highway_authority: string;
    works_location_coordinates?: string;
    street_name: string;
    area_name: string;
    town: string;
    permit_status?: PermitStatus;
    work_status?: WorkStatus;
    work_status_ref?: WorkStatusRef;
    work_category?: WorkCategory;
    work_category_ref?: WorkCategoryRef;

    start_date?: string;
    start_time?: string | null;
    end_date?: string;
    end_time?: string | null;
    proposed_start_date?: string;
    proposed_start_time?: string | null;
    proposed_end_date?: string;
    proposed_end_time?: string | null;
    actual_start_date_time?: string | null;
    actual_end_date_time: string | null;

    usrn: string;

    is_ttro_required?: "No" | "Not provided" | "Yes";
    is_covid_19_response?: "No" | "Yes";

    works_location_type: string;
    permit_conditions?: string;

    road_category: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

    is_deemed?: "No" | "Yes";

    collaborative_working: "No" | "Yes";

    close_footway?: string;
    close_footway_ref?: string;

    collaboration_type?: string;
    collaboration_type_ref?: string;

    activity_type?: string;
    activity_location_type?: string;
    activity_location_description?: string;
    activity_reference_number?: string;
    activity_coordinates?: string;
    activity_name?: string;
    activity_type_details?: string | null;

    traffic_management_type: string;
    traffic_management_required?: "No" | "Yes";
    traffic_management_type_ref?: TrafficManagementTypeRef;
    is_traffic_sensitive?: "No" | "Yes";
  };
}
