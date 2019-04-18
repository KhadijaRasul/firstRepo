import {by} from "protractor";
import * as prop from  "../../../../TestData/prop.json";


export class SMLocators{

    //Following are locators for SM Index page:
    public getMaintenanceIcon(){
        return by.className('pk-icon-maintenance');
    }
    public clickScheduledMaintenanceSM(){
        return by.xpath('//*[@class="pk-active"]/ul[@class="pk-subnavigation"]/li[contains(text(),"Scheduled Maintenance")]');
    }
    public clickNewButton(){
        return by.id('contextButtonNew');           
    }
    public async getSitePickerWindow(){
        return by.className('modalWindowFrame ui-draggable') ;    
    }
    public clickSiteName(){
        return by.xpath('//*[@id="SitesAndRegions_tableContainer"]//p[contains(text(),"(No Site)")]');        
    }
    public searchSMImdex(){
        return by.xpath('(//*[@class="listSearchLarge"])//input');
    }
    public getSearchIconSMIndex(){
        return by.xpath('(//*[@class="listSearchLarge"])[1]/div');
    }
    public getCodeFromSMIndex(){
        return by.xpath('//div[@id="ScheduledMaintenance_tableContainer"]//tbody[contains(@id,"_tbodyx")]//tr[1]//p[contains(text(),"SM")]');
    }
    public getCheckBoxSMIndex(){
        return by.xpath('//div[@id="ScheduledMaintenance_tableContainer"]//tbody[contains(@id,"_tbodyx")]//tr[1]//input[@type="checkbox"]');
    }
    public getDeleteButtonSMIndex(){
        return by.id('contextButtonDelete');
    }
    public clickOkForDeletion(){
        return by.className('saveButtonAct');
    }
    public getCreateButton() {
        return by.className('create');
    }
    public getExistingSM() {
        return by.xpath('//div[@id="ScheduledMaintenance_tableContainer"]//tbody[contains(@id,"_tbodyx")]//tr[1]');
   }
    public getNoOfRecordSM() {
    return by.xpath('//div[contains(@id,"__contentFrame")]//tbody[contains(@id,"_ft")]//span');
    }

    //Following are locators for Top pane of SM Edit page:
    public clickSaveButton(){
        return by.className("saveButtonAct action");
    }
    public clickBackButton(){
        return by.xpath('(//span[@id="contextButtonClose"])[2]');
    }
    public getGenerateWONowButtonSM(){
        return by.id('contextButtonCreateWO');
    }
    public clickAssetDropDownSM(){
        return by.xpath('(//div[contains(@id,"_virtaid_btn")])'); 
    }
    public getAssetSM(){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_243_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_bd")]//tbody[contains(@id,"_tbodyx")]/tr[2]');
    }
    public clickStatusDropDownSM(){
        return by.xpath('(//div[contains(@id,"_intStartAsWorkOrderStatusID_cell")]//div[@class="autoSuggestDropdownButton35"])');
    }
    public getStatusSM (){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_1636_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_bd")]//tbody[contains(@id,"_tbodyx")]//p[contains(text(),"'+(<any>prop).Tenant1.status+'")]');
    }   
    public getStatusfromTextBoxSM(){
        return by.xpath('//div[contains(@id,"_column_intStartAsWorkOrderStatusID_cell")]//div[contains(@id,"_oe")]//input[@type="text"]');
    }
    public clickMaintenanceDropDownSM(){
        return by.xpath('(//div[contains(@id,"_intMaintenanceTypeID_cell")]//div[@class="autoSuggestDropdownButton35"])');
    }
    public getMaintenancefromTextBoxSM(){
        return by.xpath('//div[contains(@id,"_column_intMaintenanceTypeID_cell")]//div[contains(@id,"_oe")]//input[@type="text"]');
    }
    public getMaintenanceSM (){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_bd")]//tbody[contains(@id,"_tbodyx")]//p[contains(text(),"'+(<any>prop).Tenant1.maintenance+'")]'); 
    }
    public getPriorityfromTextBoxSM(){
        return by.xpath('//div[contains(@id,"_column_intPriorityID_cell")]//div[contains(@id,"_oe")]//input[@type="text"]');
    }
    public clickPriorityDropDownSM(){
        return by.xpath('(//div[contains(@id,"_column_intPriorityID_cell")]//div[@class="autoSuggestDropdownButton35"])');   
    }
    public getPrioritySM (){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_bd")]//tbody[contains(@id,"_tbodyx")]//p[contains(text(),"'+(<any>prop).Tenant1.priority+'")]');
    }
    public getCheckBoxCreateWOSM(){
        return by.xpath('//div[contains(@id,"_column_bolCanFireSMWithOpenWO_cell")]//input[@type="checkbox"]');
    }
    public getEstimatedCompletionDaySM(){
        return by.xpath('//div[contains(@id,"_column_intSuggestedCompletion_cell")]//input[@type="text"]');
    }
    public activateSM(){
        return by.xpath('//div[contains(@id,"_column_OnlineOffline_cell")]//img');
    }

    //Following are locators for General Tab of SM Edit page:
    public getSummarySM(){
        return by.xpath('(//div[contains(@id,"_column_strDescription_cell")])[1]//textarea');
    }
    public getEstimatedLaborSM(){
        return by.xpath('//div[contains(@id,"_column_dblTimeEstimatedHours_cell")]//input[@type="text"]');
    }
    public getAssignedUserFromTextBoxSM(){
        return by.xpath('//div[contains(@id,"_column_intAssignedToUserID_cell")]//div[contains(@id,"_oe")]//input[@type="text"]');
    }
    public getAssignedUserDropDownSM(){
        return by.xpath('(//div[contains(@id,"_column_intAssignedToUserID_cell")]//div[@class="autoSuggestDropdownButton35"])');
    }
    public searchAssignedUserSM(){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_hd")]//input[contains(@id,"_search____searchtermparameter")]');
    }
    public getSearchIconSMDetail(){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_hd")]//div[contains(@id,"_topsy")]//span[@class="listSearchLarge"]/div');
    }
    public getAssignedUserSM(){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_bd")]//tbody[contains(@id,"_tbodyx")]//tr[1]');
    }
    public getCode(){
        return by.xpath('(//div[contains(@id,"_column_strCode_cell")]//div[@class="formCellInside35"])//input[@type="text"]');
    }

    //Following are locators for Scheduling Tab of SM Edit page:
    public getSchedulingTab(){
       return by.xpath('//li[contains(@id,"_tabPage_Scheduling")]');
    }
    public getSchedulingRadioButtonAny(){
        return by.xpath('//div[contains(@id,"_tabPage_Scheduling_tabpage")]//div[contains(@id,"_orphans")]//div[contains(@id,"_column_GenerateWorkOrderWhenColumn_cell")]//tr[2]//input[@type="radio"]');
    }
    public getTriggerDesc(){
        return by.xpath('//div[@id="Triggers_tableContainer"]//tbody[contains(@id,"_tbodyx")]//td[2]//p');
    }
    public getAddScheduleButton(){
        return by.xpath('//div[contains(@id,"_tabPage_Scheduling_tabpage")]//div[contains(@id,"_orphans")]//div[contains(@id,"_ft")]//span[@title="New"]');
    }
    public getHourlyButtonSMTrigger(){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]//span[contains(@id,"_bd")]//table[@class="mainFormContainer35 popup"]//div[contains(@id,"_sch_timeDiv")]//input[@type="radio" and @value="h"]');
    }
    public getSaveButtonSMTrigger(){
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]//span[contains(@id,"_ft")]//div[@class="pushButtonsPane"]//div[contains(@class,"saveButtonAct action")]');
    }

    //Following are locators for Log Tab of SM Edit page:
    public getLogTab(){
        return by.xpath('//li[contains(@id,"_tabPage_Log")]');
    }
    public getLogWOCreatedDesc(){
        return by.xpath('//div[@id="WorkOrders_tableContainer"]//tbody[contains(@id,"_tbodyx")]//td[3]//p');
    }  
}
