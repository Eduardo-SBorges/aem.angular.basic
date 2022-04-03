/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angular.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.angular.core.models.BasicComponent;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    BasicComponent.class,
    ComponentExporter.class
}, resourceType = "angularapp/components/basic-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BasicComponentImpl
    implements BasicComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean checkbox;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @Override
    public Boolean getCheckbox() {
        return checkbox;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
